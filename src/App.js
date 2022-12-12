import "./App.css";
import { useState, useEffect } from "react";
import { getPhrases } from "./utils/api";
import { Flashcard } from "./components/Flashcard";
import { AddPhrase } from "./components/AddPhrase";
import { Routes, Route } from "react-router-dom";
import { Phrases } from "./components/Phrases";
import { MainNav } from "./components/MainNav";

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
      <h1>English-Thai Phrases</h1>
      <MainNav />
      <Routes>
        <Route path="/flashcards" element={<Flashcard phrases={phrases} />} />
        <Route
          path="/"
          element={
            <>
              <Phrases phrases={phrases} />
              <AddPhrase setPhrases={setPhrases} />
            </>
          }
        />
      </Routes>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
