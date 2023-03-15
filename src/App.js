import React, { useState } from "react";
import { Route, useNavigate, Routes } from "react-router-dom";
import Tour from "./views/Tour";

function App() {
  const [language, setLanguage] = useState("en"); // varsayılan olarak İngilizce seçili
  const navigate = useNavigate();

  const handleLanguageChange = (languageCode) => {
    setLanguage(languageCode);
    navigate(`/${languageCode}`);
  };

  const words = {
    en: ["Welcome!", "This is an English page."],
    tr: ["Hoşgeldiniz!", "Bu bir Türkçe sayfa."],
    rus: ["Добро пожаловать!", "Это страница на русском языке."],
    fr: ["Bienvenue!", "Ceci est une page en français."],
  };

  const [greeting, pageMessage] = words[language];

  return (
    <>
      <button onClick={() => handleLanguageChange("en")}>English</button>
      <button onClick={() => handleLanguageChange("tr")}>Türkçe</button>
      <button onClick={() => handleLanguageChange("rus")}>Русский</button>
      <button onClick={() => handleLanguageChange("fr")}>Français</button>
      <p>{greeting}</p>
      <p>{pageMessage}</p>
      <Routes>
        <Route
          exact
          path="/:lang"
          component={({ match }) => <Tour words={words[match.params.lang]} />}
        />
      </Routes>
    </>
  );
}

export default App;
