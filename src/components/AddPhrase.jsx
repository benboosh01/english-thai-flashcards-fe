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
    setDisable(false);
    setVisible(false);
  };

  return (
    <section>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Add Phrase
      </button>
      {visible ? (
        <form onSubmit={submitPhrase}>
          <label htmlFor="english">English</label>
          <input
            id="english"
            type="text"
            value={english}
            onChange={(e) => {
              setEnglish(e.target.value);
            }}
            placeholder="Enter english phrase"
          ></input>
          <label htmlFor="thai">Thai</label>
          <input
            id="thai"
            type="text"
            value={thai}
            onChange={(e) => {
              setThai(e.target.value);
            }}
            placeholder="Enter thai phrase"
          ></input>
          <input type="submit" value="Submit Phrase" disabled={disable} />
        </form>
      ) : null}
    </section>
  );
};
