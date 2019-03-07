import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

class Football extends Component {
  render() {
    return (
      <Route exact path="/football">
        <div className="App">
          <header className="App-header">
            <p>
              Football&nbsp;
              <span role="img" aria-label="Footabll">
                🏈
              </span>
            </p>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><strong>Football</strong></li>
              <li><Link to="/cycling">Cycling</Link></li>
            </ul>
          </header>
        </div>
      </Route>
    );
  }
}

export default Football;
