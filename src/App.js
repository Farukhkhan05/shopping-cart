import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route path="/cart" exact component={Cart}></Route>
      <Route path='/login' component={Login}/>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
