import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>GitHub - pages</h1>
        <p>Esto es un testing de GitHub-pages para armar un portfolio</p>
        <p>Nuevo Commit lunes 25 / 9 / 2023</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div></BrowserRouter>
  );
}

export default App;