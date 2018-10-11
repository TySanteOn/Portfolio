import React, { Component } from 'react';
import './css/style.css';
import Header from './components/Header';
import Homepage from './components/Homepage';

import { Route, Switch } from "react-router-dom";

class App extends Component {

  render() {
    const {works} = this.props
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact render={() => <Homepage works={works} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
