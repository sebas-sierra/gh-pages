import { createContext, useState } from "react";
export const ThemeContext = createContext();

const ThemeProvider = ({children})  => {
    const initialTheme = "light";
    const initialLanguage = "esp";

    //este objeto representa un diccionario para nuestra App, puede estar en un archivo JSON independiente o en una API
    const translations = {
        esp: {
            nombreReferencia: "texto",
            headerTitle: "Menu de la store",
        },
        eng: {
            nombreReferencia: "text",
            headerTitle: "Store's menu",
        },
    };
    const[ theme, setTheme ] = useState(initialTheme);
    const[ language, setLanguage] = useState(initialLanguage);
    const[ texts, setTexts] = useState(translations[language])
  
    const handleTheme = (e) => {
      console.log(e.target.value);
      if (e.target.value === 'light') {
        setTheme('light')
      } else {
        setTheme('dark')
      }
    }
  
    const handleLanguage = (e) => {
      if (e.target.value === 'esp') {
        setLanguage('esp');
        setTexts(translations.esp);
        console.log(texts.headerTitle);
      } else {
        setLanguage('eng');
        setTexts(translations.eng);
        console.log(texts.headerTitle);
      }
  
    };

    return (
        <ThemeContext.Provider value={{ theme, handleTheme, texts, handleLanguage}}>
            {children}
        </ThemeContext.Provider>
    )

};

export default ThemeProvider