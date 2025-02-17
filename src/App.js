import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import CartProvider from './context/CartContext';
import ThemeProvider from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <ThemeProvider>
        <ModalProvider>
          <CartProvider>
            <Header />
            <Main />
            <Footer />
          </CartProvider>
        </ModalProvider>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
library.add(fab, fas, far)