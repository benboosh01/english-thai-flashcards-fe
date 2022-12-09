import "./App.css";
import { useState, useEffect } from "react";
import { getPhrases } from "./utils/api";
import { Flashcard } from "./components/Flashcard";
import { AddPhrase } from "./components/AddPhrase";

function App() {
  const [phrases, setPhrases] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPhrases().then(({ phrases }) => {
      setPhrases(phrases);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>loading</p>;
  return (
    <div className="App">
      <h1>English-Thai Flashcards</h1>
      <Flashcard phrases={phrases} />
      <AddPhrase setPhrases={setPhrases} />
    </div>
  );
}

export default App;
