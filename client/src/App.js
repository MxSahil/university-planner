import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Login from './Login'
import Dashboard from './Dashboard'
import BuildBudget from './BuildBudget'
import CheckBudget from './CheckBudget'
import Courses from './Courses'
import Footer from './components/Footer'
//import { Nav } from './components/Navbar/NavbarElements';

function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <Switch>    
            <Route exact path='/' component={Login} ></Route>    
            <Route path='/Dashboard' component={Dashboard} ></Route> 
            <Route path='/BuildBudget' component={BuildBudget} ></Route>    
            <Route path='/CheckBudget' component={CheckBudget} ></Route>    
            <Route path='/Courses' component={Courses} ></Route>    
          </Switch>  
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
