import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/Signup';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
  );
}

export default App;
