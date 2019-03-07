import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Football from './Football'
import Cycling from './Cycling'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Home&nbsp;
            <span role="img" aria-label="Home">
              🏡
            </span>
          </p>
          <ul>
            <li><strong>Home</strong></li>
            <li><Link to="/football">Football</Link></li>
            <li><Link to="/cycling">Cycling</Link></li>
          </ul>
        </header>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Football />
          <Route exact path="/cycling" component={Cycling} />
        </>
      </Router>
    )
  }
}

export default App;
