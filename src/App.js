import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/index.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import NavBar from './Kunal/Navbar';
import Login from './Login'
import Dashboard from './Dashboard'
import BuildBudget from './BuildBudget'
import CheckBudget from './CheckBudget'
import Courses from './Courses'
//import { Nav } from './components/Navbar/NavbarElements';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>    
          <Route exact path='/' component={Login} ></Route>    
          <Route path='/Dashboard' component={Dashboard} ></Route> 
          <Route path='/BuildBudget' component={BuildBudget} ></Route>    
          <Route path='/CheckBudget' component={CheckBudget} ></Route>    
          <Route path='/Courses' component={Courses} ></Route>    
        </Switch>  
    </div>
    </Router>
  );
}

export default App;
