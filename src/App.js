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

/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LanguageSwitcher() {
  const [language, setLanguage] = useState('en'); // varsayılan olarak İngilizce seçili
  const navigate = useNavigate();

  const handleLanguageChange = (languageCode) => {
    setLanguage(languageCode);
    navigate(`/${languageCode}`); // dil koduna göre uygun URL'ye yönlendirir
  };

  let words;
  switch (language) {
    case 'en':
      words = ['Welcome!', 'This is an English page.'];
      break;
    case 'tr':
      words = ['Hoşgeldiniz!', 'Bu bir Türkçe sayfa.'];
      break;
    case 'rus':
      words = ['Добро пожаловать!', 'Это страница на русском языке.'];
      break;
    case 'fr':
      words = ['Bienvenue!', 'Ceci est une page en français.'];
      break;
    default:
      words = ['Welcome!', 'This is an English page.'];
      break;
  }

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>
        English
      </button>
      <button onClick={() => handleLanguageChange('tr')}>
        Türkçe
      </button>
      <button onClick={() => handleLanguageChange('rus')}>
        Русский
      </button>
      <button onClick={() => handleLanguageChange('fr')}>
        Français
      </button>
      <p>{words[0]}</p>
      <p>{words[1]}</p>
      <Route exact path="/:lang" component={() => <MyComponent words={words} />} />
    </div>
  );
}

export default LanguageSwitcher;
*/
