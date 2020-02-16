import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/About';



function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
};


export default App;
