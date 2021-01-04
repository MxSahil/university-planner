import logo from './logo.svg';
import './App.css';
import NavBar from './Kunal/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
//import { Nav } from './components/Navbar/NavbarElements';

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
