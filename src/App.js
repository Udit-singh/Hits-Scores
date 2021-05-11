import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Score from './pages/scores';
import News from './pages/news';
import Updates from './pages/updates';
import HallFame from './pages/hallFame';
import Cards from './cardUI';

function App() {
  return (
    <Router>
      <Navbar />    
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/scores' component={Score} />
        <Route path='/news' component={Cards} />
        <Route path='/updates' component={Updates} />
        <Route path='/HallFame' component={HallFame} />
      </Switch>
    </Router>
    
  );
}

export default App;
