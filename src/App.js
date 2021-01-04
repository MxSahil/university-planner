import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/index.js';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './Kunal/Navbar';
//import { Nav } from './components/Navbar/NavbarElements';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NavBar/>
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
    </Router>
  );
}

export default App;
