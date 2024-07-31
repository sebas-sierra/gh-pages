import { createContext, useState } from "react";
import { translations } from "../mock/translations";
export const ThemeContext = createContext();

const ThemeProvider = ({children})  => {
    const initialTheme = "light";
    const initialLanguage = "esp";

    const[ theme, setTheme ] = useState(initialTheme);
    const[ language, setLanguage] = useState(initialLanguage);
    const[ texts, setTexts] = useState(translations[language])
  
    const handleTheme = (e) => {
      console.log(e.target.value);
      if (theme === 'light') {
        setTheme('dark')
      } else {
        setTheme('light')
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