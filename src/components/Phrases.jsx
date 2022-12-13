export const Phrases = ({ phrases }) => {
  return (
    <section className="phrases-section">
      <ul className="phrases-list">
        {phrases.map((phrase) => {
          return (
            <li key={phrase.id} className="phrase-card">
              <p className="phrase-item">English: {phrase.english}</p>
              <p className="phrase-item">Thai Script: {phrase.thai_script}</p>
              <p className="phrase-item">Thai Latin: {phrase.thai_latin}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
