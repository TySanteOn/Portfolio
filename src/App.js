import React, { Component } from 'react';
import './App.css';

import { Route, Switch, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>
            <Link to="/">TySO</Link>
          </h1>
        </header>
        <main>
          <Switch>
            <Route path="/" exact render={() => `<h2>hi</h2>`} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
