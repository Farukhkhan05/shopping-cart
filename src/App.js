import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path ="/" component={Home}/>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
