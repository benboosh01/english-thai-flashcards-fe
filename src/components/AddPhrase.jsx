import { useState } from "react";
import { addPhrase } from "../utils/api";
import { v4 as uuidv4 } from "uuid";

export const AddPhrase = ({ setPhrases }) => {
  const [english, setEnglish] = useState("");
  const [thaiScript, setThaiScript] = useState("");
  const [thaiLatin, setThaiLatin] = useState("");
  const [category, setCategory] = useState("");
  const [visible, setVisible] = useState(false);
  const [disable, setDisable] = useState(false);

  const submitPhrase = (event) => {
    event.preventDefault();
    setDisable(true);
    const newPhrase = {
      id: uuidv4(),
      english: english,
      thai_script: thaiScript,
      thai_latin: thaiLatin,
      category: category,
    };
    addPhrase(newPhrase).then((res) => {
      setPhrases((currPhases) => {
        return [...currPhases, res.phrase];
      });
    });
    setEnglish("");
    setThaiScript("");
    setThaiLatin("");
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
            rows={2}
          />
          <label htmlFor="thai-script">Thai Script</label>
          <textarea
            className="add-phase-text"
            id="thai-script"
            type="textarea"
            value={thaiScript}
            onChange={(e) => {
              setThaiScript(e.target.value);
            }}
            placeholder="Enter thai phrase"
            rows={2}
          />
          <label htmlFor="thai-latin">Thai Latin</label>
          <textarea
            className="add-phase-text"
            id="thai-latin"
            type="textarea"
            value={thaiLatin}
            onChange={(e) => {
              setThaiLatin(e.target.value);
            }}
            placeholder="Enter thai phrase"
            rows={2}
          />
          <label htmlFor="category">Category</label>
          <textarea
            className="add-phase-text"
            id="category"
            type="textarea"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            placeholder="Enter thai phrase"
            rows={1}
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
