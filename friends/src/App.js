import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';

function App() {






  return (
    <Router>
      <div className="App">
      
        <Link to="/login">Login</Link> 
        <Link to="/friends">Friend List</Link>

        <Switch>
          <Route path="/login" component={LoginForm}/>
          {/* <Route component={LoginForm}/> */}
          <Route path="/friends" component={FriendsList}/>
          {/* <Route component={FriendsList}/> */}
        </Switch>

      </div>
    </Router>
  );
}

export default App;
