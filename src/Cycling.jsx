import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Cycling extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Cycling&nbsp;
            <span role="img" aria-label="Cycling">
              🚲
            </span>
          </p>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/football">Football</Link></li>
            <li><strong>Cycling</strong></li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Cycling;
