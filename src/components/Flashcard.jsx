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
    <section>
      <button
        onClick={() => {
          setShowEng(!showEng);
        }}
      >
        Show English
      </button>
      {showEng ? <p>{phrases[randomNum].english}</p> : null}

      <button
        onClick={() => {
          setShowThai(!showThai);
        }}
      >
        Show Thai
      </button>
      {showThai ? <p>{phrases[randomNum].thai}</p> : null}

      <button onClick={generateNumber}>Generate New Phrase</button>
    </section>
  );
};
