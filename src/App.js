import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HashRouter>
      <Header/>
      <Main/>
      <Footer/>
    </HashRouter>
  );
}

export default App;