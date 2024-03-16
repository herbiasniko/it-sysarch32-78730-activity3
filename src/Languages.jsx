export default function Languages({ setNameLanguage }) {
  const languages = ["english", "japanese", "chinese", "french"];

  return (
    <div className="language-container">
      {languages.map((language, index) => {
        return (
          <button
            key={index}
            className="language"
            onClick={() => setNameLanguage(language)}
          >
            {language}
          </button>
        );
      })}
    </div>
  );
}
