import { useState } from "react";
import { addPhrase } from "../utils/api";
import { v4 as uuidv4 } from "uuid";

export const AddPhrase = ({ setPhrases }) => {
  const [english, setEnglish] = useState("");
  const [thai, setThai] = useState("");
  const [visible, setVisible] = useState(false);
  const [disable, setDisable] = useState(false);

  const submitPhrase = (event) => {
    event.preventDefault();
    setDisable(true);
    const newPhrase = {
      id: uuidv4(),
      english: english,
      thai: thai,
    };
    addPhrase(newPhrase).then((res) => {
      setPhrases((currPhases) => {
        return [...currPhases, res.phrase];
      });
    });
    setEnglish("");
    setThai("");
    setDisable(false);
    setVisible(false);
  };

  return (
    <section className="add-phrase-section">
      {visible ? (
        <form onSubmit={submitPhrase} className="add-phrase-form">
          <label htmlFor="english">English</label>
          <textarea
            className="add-phase-text"
            id="english"
            type="textarea"
            value={english}
            onChange={(e) => {
              setEnglish(e.target.value);
            }}
            placeholder="Enter english phrase"
            rows={5}
          />
          <label htmlFor="thai">Thai</label>
          <textarea
            className="add-phase-text"
            id="thai"
            type="textarea"
            value={thai}
            onChange={(e) => {
              setThai(e.target.value);
            }}
            placeholder="Enter thai phrase"
            rows={5}
          />
          <input
            type="submit"
            value="Submit Phrase"
            disabled={disable}
            className="app-button"
          />
        </form>
      ) : (
        <button
          onClick={() => {
            setVisible(!visible);
          }}
          className="app-button"
        >
          Add Phrase
        </button>
      )}
    </section>
  );
};
