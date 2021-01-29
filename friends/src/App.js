import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';


function App() {

  return (
    <Router>
      <div className="App">
      
        <Link to="/login">Login</Link> 
        <Link to="/friends">Friend List</Link>
        

        <Switch>
          <Route path="/login" component={LoginForm}/>
          <PrivateRoute exact path="/friends" component={FriendsList}/>
          <Route path="/" component={LoginForm}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
