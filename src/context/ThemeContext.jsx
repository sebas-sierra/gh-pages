import { createContext, useEffect, useState } from "react";
import { translations } from "../mock/translations";
import { useLocation, useNavigate } from "react-router-dom";
export const ThemeContext = createContext();

const ThemeProvider = ({children})  => {
    const initialTheme = "light";
    const initialLanguage = "esp";

    const[ theme, setTheme ] = useState(initialTheme);
    const[ language, setLanguage] = useState(initialLanguage);
  
    const[ texts, setTexts] = useState(translations[language]);
    const location = useLocation();
    console.log(location.pathname)
    console.log(`${theme}`)

    const [ download, setDownload ] = useState('file-esp');
    
    const handleTheme = (e) => {
      console.log(e.target.value);
      if (theme === 'light') {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }

    const navigate = useNavigate();

    const storeTheme =() => {
      console.log('funciona storeTheme')
      //navigate to store
      //navigate('/capitulos/prod');
      //setTheme('store)
    }

    useEffect(() => {
      const funcionStore = () => {
        if (location.pathname === '/capitulos/prod') {
          setTheme('store')
        } else {
          setTheme('light')
        }
      }

      funcionStore();
    },[ location ]);

    
    const handleLanguage = (e) => {
      if (language === 'esp') {
        setLanguage('eng');
        setTexts(translations.eng);
        setDownload('file-eng');
        console.log(texts.headerTitle);
      } else {
        setLanguage('esp');
        setTexts(translations.esp);
        setDownload('file-esp');
        console.log(texts.headerTitle);
      }
  
    };

    return (
        <ThemeContext.Provider value={{ theme, handleTheme, texts, handleLanguage,language, download, storeTheme}}>
            {children}
        </ThemeContext.Provider>
    )

};

export default ThemeProvider