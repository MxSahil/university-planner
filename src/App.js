import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Sidebar from './components/Sidebar/index.js';
import {BrowserRouter as Router} from 'react-router-dom';
=======
import NavBar from './Kunal/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
//import { Nav } from './components/Navbar/NavbarElements';
>>>>>>> navbar

function App() {
  return (
    <Router>
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Sidebar/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
      <NavBar />
>>>>>>> navbar
    </Router>
  );
}

export default App;
